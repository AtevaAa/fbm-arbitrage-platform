"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

const getMousePos = (e: MouseEvent) => {
  return { x: e.clientX, y: e.clientY };
};

interface CrosshairProps {
  color?: string;
  triggerSelector?: string; // Селектор для элементов, которые должны активировать прицел
}

const Crosshair = ({ color = 'rgba(59, 130, 246, 0.8)', triggerSelector = '[data-crosshair]' }: CrosshairProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const lineHorizontalRef = useRef<HTMLDivElement>(null);
  const lineVerticalRef = useRef<HTMLDivElement>(null);
  const filterXRef = useRef<SVGFETurbulenceElement>(null);
  const filterYRef = useRef<SVGFETurbulenceElement>(null);
  const isActiveRef = useRef(false);

  let mouse = { x: 0, y: 0 };

  useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      if (!isActiveRef.current) return;

      mouse = getMousePos(ev);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.15 },
      ty: { previous: 0, current: 0, amt: 0.15 },
    };

    gsap.set([lineHorizontalRef.current, lineVerticalRef.current], { opacity: 0 });

    const primitiveValues = { turbulence: 0 };

    const tl = gsap.timeline({
      paused: true,
      onStart: () => {
        if (lineHorizontalRef.current && lineVerticalRef.current) {
          lineHorizontalRef.current.style.filter = `url(#filter-noise-x)`;
          lineVerticalRef.current.style.filter = `url(#filter-noise-y)`;
        }
      },
      onUpdate: () => {
        if (filterXRef.current && filterYRef.current) {
          filterXRef.current.setAttribute('baseFrequency', primitiveValues.turbulence.toString());
          filterYRef.current.setAttribute('baseFrequency', primitiveValues.turbulence.toString());
        }
      },
      onComplete: () => {
        if (lineHorizontalRef.current && lineVerticalRef.current) {
          lineHorizontalRef.current.style.filter = lineVerticalRef.current.style.filter = 'none';
        }
      }
    }).to(primitiveValues, {
      duration: 0.5,
      ease: 'power1',
      startAt: { turbulence: 1 },
      turbulence: 0,
    });

    const render = () => {
      if (!isActiveRef.current) return;

      renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.current = mouse.y;

      for (const key in renderedStyles) {
        renderedStyles[key as keyof typeof renderedStyles].previous = lerp(
          renderedStyles[key as keyof typeof renderedStyles].previous,
          renderedStyles[key as keyof typeof renderedStyles].current,
          renderedStyles[key as keyof typeof renderedStyles].amt
        );
      }

      if (lineHorizontalRef.current && lineVerticalRef.current) {
        gsap.set(lineVerticalRef.current, { x: renderedStyles.tx.previous });
        gsap.set(lineHorizontalRef.current, { y: renderedStyles.ty.previous });
      }

      requestAnimationFrame(render);
    };

    const enter = () => {
      isActiveRef.current = true;
      renderedStyles.tx.previous = renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.previous = renderedStyles.ty.current = mouse.y;

      gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
        duration: 0.3,
        ease: 'Power3.easeOut',
        opacity: 1,
      });

      tl.restart();
      requestAnimationFrame(render);
    };

    const leave = () => {
      isActiveRef.current = false;
      gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
        duration: 0.3,
        ease: 'Power3.easeOut',
        opacity: 0,
      });
      tl.progress(1).kill();
    };

    // Находим все элементы с указанным селектором
    const updateTriggers = () => {
      const elements = document.querySelectorAll(triggerSelector);
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', enter);
        element.removeEventListener('mouseleave', leave);
        element.addEventListener('mouseenter', enter);
        element.addEventListener('mouseleave', leave);
      });
    };

    // Инициальная установка
    updateTriggers();

    // Обновляем триггеры при изменении DOM
    const observer = new MutationObserver(updateTriggers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();

      // Очищаем все слушатели
      const elements = document.querySelectorAll(triggerSelector);
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', enter);
        element.removeEventListener('mouseleave', leave);
      });
    };
  }, [color, triggerSelector]);

  return (
    <div
      ref={cursorRef}
      className="cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10000,
      }}
    >
      <svg style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
        <defs>
          <filter id="filter-noise-x">
            <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves={1} ref={filterXRef} />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
          <filter id="filter-noise-y">
            <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves={1} ref={filterYRef} />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
        </defs>
      </svg>
      <div
        ref={lineHorizontalRef}
        style={{
          position: 'absolute',
          width: '100%',
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          pointerEvents: 'none',
          transform: 'translateY(-50%)',
          opacity: 0,
          boxShadow: `0 0 20px ${color}`,
        }}
      />
      <div
        ref={lineVerticalRef}
        style={{
          position: 'absolute',
          height: '100%',
          width: '2px',
          background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
          pointerEvents: 'none',
          transform: 'translateX(-50%)',
          opacity: 0,
          boxShadow: `0 0 20px ${color}`,
        }}
      />
    </div>
  );
};

export default Crosshair;

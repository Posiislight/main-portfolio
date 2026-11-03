"use client"

import { useState, type KeyboardEvent } from "react"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export type Slide = { src: string; full: string; alt: string; caption: string; width: number; height: number }

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
const arrow = `absolute top-1/2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-soft transition-colors hover:bg-black/80 ${focusRing}`

export function ImageCarousel({ slides, label }: { slides: Slide[]; label: string }) {
  const [i, setI] = useState(0)
  const [open, setOpen] = useState(false)
  const last = slides.length - 1
  const go = (n: number) => setI(n < 0 ? last : n > last ? 0 : n)
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(i - 1)
    if (e.key === "ArrowRight") go(i + 1)
  }
  const slide = slides[i]

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        onKeyDown={onKey}
        className="flex flex-col gap-3"
      >
        <div className="relative aspect-[3200/2356] w-full overflow-hidden rounded-xl border border-line bg-[#121211]">
          {slides.map((s, n) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={s.width}
              height={s.height}
              sizes="(min-width: 1200px) 560px, 100vw"
              aria-hidden={n !== i}
              className={`absolute inset-0 size-full object-contain transition-opacity duration-300 motion-reduce:transition-none ${
                n === i ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />
          ))}
          <Dialog.Trigger
            aria-label={`Enlarge image ${i + 1} of ${slides.length}`}
            className={`absolute inset-0 cursor-zoom-in rounded-xl ${focusRing}`}
          />
          <button type="button" onClick={() => go(i - 1)} className={`${arrow} left-3`} aria-label="Previous image">
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => go(i + 1)} className={`${arrow} right-3`} aria-label="Next image">
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm text-fg-muted">
          <p aria-live="polite">{slide.caption}</p>
          <div className="flex shrink-0 items-center gap-2">
            <span className="tabular-nums">
              {i + 1} / {slides.length}
            </span>
            <div className="flex gap-1.5" aria-hidden="true">
              {slides.map((s, n) => (
                <span key={s.src} className={`size-1.5 rounded-full ${n === i ? "bg-brand" : "bg-stroke"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
        <Dialog.Content
          onKeyDown={onKey}
          className="fixed left-1/2 top-1/2 z-50 flex w-[min(96vw,1500px)] -translate-x-1/2 -translate-y-1/2 flex-col gap-3 outline-none"
        >
          <Dialog.Title className="sr-only">{slide.caption || `Image ${i + 1} of ${slides.length}`}</Dialog.Title>
          <Dialog.Description className="sr-only">{label}. Use the arrow keys to switch images, Escape to close.</Dialog.Description>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121211] shadow-lift">
            <Image
              src={slide.full}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              sizes="96vw"
              loading="eager"
              className="mx-auto max-h-[82vh] w-auto object-contain"
            />
            <button type="button" onClick={() => go(i - 1)} className={`${arrow} left-3`} aria-label="Previous image">
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(i + 1)} className={`${arrow} right-3`} aria-label="Next image">
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
            <Dialog.Close
              aria-label="Close"
              className={`absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-soft transition-colors hover:bg-black/80 ${focusRing}`}
            >
              <X className="size-5" aria-hidden="true" />
            </Dialog.Close>
          </div>
          <p className="text-center text-sm text-fg-muted">
            {slide.caption && `${slide.caption} · `}{i + 1} / {slides.length}
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

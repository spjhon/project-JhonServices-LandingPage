

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"

function HeroVideo() {
  return (
    <section className="container mx-auto relative max-w-200 mb-30 mt-50 text-center shadow-2xl">

      <h2 className="pb-6 mb-6 text-3xl md:text-4xl font-bold ">
        Conoce{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Pi Services{" "}
        </span>
        por medio de nuestro video promocional
      </h2>

    <div className="container relative max-w-200 mx-auto">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
    </section>
  )
}

export  {
  HeroVideo,
}


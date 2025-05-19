import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full bg-neutral-50 py-16 dark:bg-neutral-900 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Text Content */}
          <div className="space-y-8 md:order-1">
            <div>
              <span className="inline-block rounded-full bg-neutral-200 px-4 py-2 text-sm font-medium dark:bg-neutral-800 dark:text-neutral-200">
                Transform Your Pet Photos
              </span>
            </div>
            <h1 className="font-sans text-5xl font-bold leading-tight text-neutral-900 dark:text-white md:text-6xl lg:text-7xl">
              Turn your pet into{' '}
              <span className="italic text-neutral-700 dark:text-neutral-300">beautiful</span>{' '}
              wall art
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
              Upload your favorite pet photo and create stunning, personalized wall art, prints, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/collections/all" 
                className="inline-block border-2 border-neutral-900 bg-neutral-900 px-8 py-3 font-sans font-semibold uppercase tracking-wider text-white transition-colors hover:bg-transparent hover:text-neutral-900 dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-transparent dark:hover:text-white"
              >
                Shop Now
              </Link>
              <Link 
                href="#how-it-works" 
                className="inline-block border-2 border-neutral-900 px-8 py-3 font-sans font-semibold uppercase tracking-wider text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
              >
                How It Works
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative aspect-square md:order-2">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/hero.webp"
                alt="Pet portrait wall art"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-neutral-900/50 md:block">
              <p className="font-sans text-lg font-medium text-neutral-900 dark:text-white">
                "I love my new pet portrait! It looks amazing in my living room."
              </p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                — Happy Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
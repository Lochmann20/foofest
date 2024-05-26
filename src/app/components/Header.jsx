import Link from 'next/link';
import { Bowlby_One } from 'next/font/google';

const BowlbyOne = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default async function Header() {
  const res = await fetch(`https://yielding-cooperative-tarsal.glitch.me/`);
  const dogs = await res.json();

  return (
    <>
      <div className="bg-Hotpink py-2">
        <p className="text-xs sm:text-sm text-White text-center font-normal tracking-wider">
          Camping Spots Still Available - Reserve Yours Today!
        </p>
      </div>

      <nav className="sticky top-0 z-50 flex justify-between bg-Darkblue text-White px-4 py-3 items-center md:px-10">
        <ul className="flex gap-2">
          <li>
            <Link
              className={`font-bold text-sm sm:text-2xl ${BowlbyOne.className}`}
              href="/"
              prefetch={false}
            >
              FOOFEST
            </Link>
          </li>
        </ul>

        <ul className="flex items-center gap-4 md:gap-10">
          <li>
            <Link
              href="/booking"
              prefetch={false}
              className="bg-Hotpink font-bold text-sm md:text-mg rounded-full py-1 px-2 md:px-4 hover:bg-Lightpink"
            >
              BUY TICKETS
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-mg"
              href="/lineup"
              prefetch={false}
            >
              LINEUP
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-mg"
              href="/schedule"
              prefetch={false}
            >
              SCHEDULE
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

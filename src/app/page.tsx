import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <Image src="/icon.png" alt="Qvers" width={100} height={50} />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Support
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        {/* Hero */}
        <div className="container py-24 lg:py-32">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Qvers: Elevate Your Quran verse sharing
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                Qvers is a mobile app that allows you to share your favorite
                Quran verses with your friends and family in a beautiful
                designs.
              </p>
              {/* Buttons */}
              <div className="mt-7 grid gap-3 w-full sm:inline-flex justify-center">
                {/* donwload on appstore button */}

                <Image
                  src="/download.svg"
                  alt="Hero"
                  width={150}
                  height={500}
                />
              </div>
            </div>
            {/* Col */}
            <div className="relative ms-4">
              <Image src="/preview.png" alt="Hero" width={500} height={500} />
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hero */}
      </div>
      <div className="bg-dark-foreground text-muted-foreground py-10 text-center">
        <p className="text-sm">
          &copy; 2025 Qvers by Burhanuddin Helmy.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { company, events } from "@/constants";

export function HeaderNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col lg:flex-row">
        <NavigationMenuItem className="w-full">
          <Link to={"#"}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full">
          <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-1 w-[300px]">
              <ListItem className="py-2">General</ListItem>
              <ListItem className="py-2">International</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full">
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[300px] md:w-[400px] gap-1">
              {company.map((list) => (
                <ListItem
                  key={list.title}
                  img={list.img}
                  className="flex gap-1 items-center"
                >
                  {list.title}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full">
          <Link to={"#"}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              GeoAI
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full">
          <NavigationMenuTrigger>Events & Media</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[300px] md:w-[400px] gap-1">
              {events.map((list) => (
                <ListItem
                  key={list.title}
                  img={list.img}
                  className="flex gap-3 items-center"
                >
                  {list.title}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full">
          <Link to={"#"}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { img?: string }
>(({ className, children, img, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 cursor-pointer px-2 py-1 leading-none no-underline outline-none transition-colors hover:bg-yellow-1 hover:text-accent-foreground",
            className
          )}
          {...props}
        >
          {img && <img src={img} alt={children as string} className="w-7" />}
          <p className="line-clamp-2 text-sm leading-snug text-gray-2">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

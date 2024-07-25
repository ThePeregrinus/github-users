import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Github } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=1",
    name: "Emma Smith",
    position: "Fullstack developer",
    socialNetworks: [
      {
        name:'Github',
        url: "https://github.com/"
      }
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=2",
    name: "John Doe",
    position: "Tech Lead",
    socialNetworks: [
      {
        name:'Github',
        url: "https://github.com/"
      }
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=3",
    name: "Roman Zazin",
    position: "Envelope Developer",
    socialNetworks: [
      {
        name:'Github',
        url: "https://github.com/"
      }
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=5",
    name: "Artem F",
    position: "React Developer",
    socialNetworks: [
      {
        name:'Github',
        url: "https://github.com/"
      }
    ],
  },
];

export const GithubUsers = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-16 sm:py-16"
    >
      <h2 className="mb-3 text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Github Search{" "}
        </span>
        Users
      </h2>
      <Input placeholder="Jonh Doe"/>
      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        <a href="https://docs.github.com/">GitHub REST API</a>
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
import { useParams } from "react-router-dom"
import { api } from "@/services/list";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Github } from "lucide-react";
import { buttonVariants } from "./ui/button";

export const User = () => {
    const useListReposQuery = api.endpoints.listRepos.useQuery
    const { id } = useParams()
    const {data, isLoading, isFetching, isError } = useListReposQuery({username:id!})

    const socialIcon = (iconName: string) => {
        switch (iconName) {
          case "Github":
            return <Github size="20" />;
        }
      };

    return <section  className="container py-16 sm:py-16">
        <h2 className="mb-3 text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {id + "'s "} 
        </span>
        profile
      </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
            {isLoading && <div>Loading...</div>}
            {isError ? <div>Error while fetching</div> : data?.map(
            ({ owner, name, login,  html_url , fork}) => (
                <Card
                key={login}
                className="bg-muted/50 mt-8 flex flex-col justify-center items-center"
                >
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    <img
                    src={owner.avatar_url}
                    alt={`${name} `}
                    className="rounded-full w-24 h-24 aspect-square object-cover"
                    />
                    <CardTitle className="text-center">{name.length > 15 ? name.slice(0,15) : name}</CardTitle>
                    <CardDescription className="text-primary">
                    {name}
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    It's {fork ? 'fork' : 'not fork'}
                </CardContent>

                <CardFooter>
                    {
                    <div>
                        <a
                        rel="noreferrer noopener"
                        href={html_url}
                        target="_blank"
                        className={buttonVariants({
                            variant: "ghost",
                            size: "sm",
                        })}
                        >
                        <span className="sr-only">{html_url}</span>
                        {socialIcon('Github')}
                        </a>
                    </div>}
                </CardFooter>
                </Card>
            )
            )}
        </div>
    </section>
}
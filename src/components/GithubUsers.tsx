import {useState } from "react";
import { Link } from "react-router-dom";

import { Button, buttonVariants } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { api } from "@/services/list";
import { Github } from "lucide-react";

import { debounce } from "@/helpers/debounce";

export const GithubUsers = () => {
  const [username, setUsername] = useState('');
  const [per_page, setPerPage] = useState(8)
  const [page, setPage] = useState(1);

  const useListUsersQuery = api.endpoints.listUsers.useQuery
  const {data, isLoading, isFetching, isError } = useListUsersQuery({username, page, per_page})
  const usersList = data?.items

  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github size="20" />;
    }
  };

  const handleSearch = debounce((value: string) => {
    setUsername(value)
    setPage(1)
  }, 500);

  return (
    <section
      id="users"
      className="container py-16 sm:py-16"
    >
      <h2 className="mb-3 text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Github Search{" "}
        </span>
         {data?.total_count} Users found
      </h2>
      <Input onChange={(e)=>{handleSearch(e.target.value)}} className='bg-muted/50' placeholder="Jonh Doe"/>
      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        <a href="https://docs.github.com/">GitHub REST API</a>
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {isLoading && <div>Loading...</div>}
        {isError ? <div>Error while fetching</div> :
        usersList?.map(
          ({ avatar_url, login, type, html_url }) => (
            <Card
              key={login}
              className="bg-muted/50 mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={avatar_url}
                  alt={`${login} ${type}`}
                  className="rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{login.length > 15 ? login.slice(0,15) : login}</CardTitle>
                <CardDescription className="text-primary">
                  {type}login
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <Link to={`user/${login}`}> <Button variant='link'>OPEN PROFILE </Button></Link>
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
                      <span className="sr-only">Github icon</span>
                      {socialIcon('Github')}
                    </a>
                  </div>}
              </CardFooter>
            </Card>
          )
        )}
      </div>
      <div className='flex mt-8 justify-center flex-row items-center gap-8'>
        <Button onClick={()=>page !== 1 && setPage(page-1)} disabled={isLoading || isFetching}> Previous Page </Button>
        {page}
        <Button onClick={()=>setPage(page+1)}  disabled={isLoading || isFetching}> Next Page </Button>
      </div>
    </section>
  );
};
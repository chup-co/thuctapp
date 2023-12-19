
import Link from 'next/link'

export default function Home() {

  const ROUTES: Record<string, string> = {
    HOME: "/",
    CONTACT: "/contact",
    ABOUT: "/about",
    TODOLIST: "/todolist",
  };


  const links = Object.keys(ROUTES).map((routeKey) => {
    const route = ROUTES[routeKey];
    return <Link className='uppercase' key={routeKey} href={route}>{routeKey}</Link>;
  }); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {links}
    </main>
    
  )
}

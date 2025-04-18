import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <img src="public/logos/dismap-logo.webp" alt="Dismap Logo" className="w-16 md:w-24 lg:w-24" />
                <br />
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your Dismap account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="username"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:text-primary hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4 hover:text-primary">
                  Guest Login
                </a>
              </div>
            </div>
          </form>
            <div className="bg-muted relative hidden md:block">
            <img
              src="public/images/login-background-image.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover opacity-50 dark:brightness-[0.2] dark:grayscale"
            />
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

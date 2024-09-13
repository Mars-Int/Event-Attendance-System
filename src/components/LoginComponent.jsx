import React, {useState} from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import authServices from "../appwrite/auth"
import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const LoginComponent = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleLogin = () => {
     authServices.login(email, password)
     console.log(email, password);
     navigate('/home')
     }

    return (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your credential below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="m@example.com"
              required 
              value={email} 
              onChange = {(e)=> setEmail(e.target.value)} 
              
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
              id="password" 
              name="password" 
              type="password" 
              required
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" 
            onClick={() => {
              handleLogin()
            }}
            >Sign in</Button>
          </CardFooter>
        </Card>
      )
}

export default LoginComponent
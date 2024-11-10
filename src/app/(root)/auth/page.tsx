import { signIn } from '@/lib/auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignInForm from '@/app/(root)/auth/_components/sign-in-form';
import SignUpForm from '@/app/(root)/auth/_components/sign-up-form';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AuthPage = () => {
  return (
    <main className='h-full flex flex-col gap-4 justify-start items-center pt-[12.5%]'>
      <Tabs
        defaultValue='SIGN_IN'
        className='w-[400px]'
      >
        <TabsList className='w-full'>
          <TabsTrigger
            value='SIGN_IN'
            className='w-1/2'
          >
            Sign in
          </TabsTrigger>
          <TabsTrigger
            value='SIGN_UP'
            className='w-1/2'
          >
            Sign up
          </TabsTrigger>
        </TabsList>
        <TabsContent value='SIGN_IN'>
          <SignInForm />
        </TabsContent>
        <TabsContent value='SIGN_UP'>
          <SignUpForm />
        </TabsContent>
      </Tabs>
      <form
        action={async () => {
          'use server';
          await signIn('github', { redirectTo: '/dashboard' });
        }}
      >
        <Button
          variant='ghost'
          type='submit'
          className='h-10 w-10 rounded-full border border-muted-foreground p-0'
        >
          <Github
            className='w-10 h-10'
            fontSize={50}
            size={50}
          />
        </Button>
      </form>
    </main>
  );
};

export default AuthPage;

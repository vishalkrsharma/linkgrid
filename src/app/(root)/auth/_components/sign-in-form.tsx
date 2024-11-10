'use client';

import { signInSchema, SignInSchemaType } from '@/schema/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';

const SignInForm = () => {
  const [passwordFieldType, setPasswordFieldType] = useState<'password' | 'text'>('password');
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: SignInSchemaType) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter email...'
                  {...field}
                />
              </FormControl>
              <FormDescription>This is the email address you will use to sign in.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type={passwordFieldType}
                  placeholder='Enter password...'
                  {...field}
                  rightIcon={
                    passwordFieldType === 'password' ? (
                      <EyeClosed
                        className='text-muted-foreground h-4 w-5 cursor-pointer'
                        onClick={() => setPasswordFieldType('text')}
                      />
                    ) : (
                      <Eye
                        className='text-muted-foreground h-4 w-5 cursor-pointer'
                        onClick={() => setPasswordFieldType('password')}
                      />
                    )
                  }
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='w-full'
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;

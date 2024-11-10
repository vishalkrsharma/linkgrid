'use client';

import { signUpSchema, SignUpSchemaType } from '@/schema/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';

const SignUpForm = () => {
  const [passwordFieldType, setPasswordFieldType] = useState<'password' | 'text'>('password');
  const [confirmPasswordFieldType, setConfirmPasswordFieldType] = useState<'password' | 'text'>('password');
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: SignUpSchemaType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter name...'
                  {...field}
                />
              </FormControl>
              <FormDescription>This will be your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type={confirmPasswordFieldType}
                  placeholder='Confirm password...'
                  {...field}
                  rightIcon={
                    confirmPasswordFieldType === 'password' ? (
                      <EyeClosed
                        className='text-muted-foreground h-4 w-5 cursor-pointer'
                        onClick={() => setConfirmPasswordFieldType('text')}
                      />
                    ) : (
                      <Eye
                        className='text-muted-foreground h-4 w-5 cursor-pointer'
                        onClick={() => setConfirmPasswordFieldType('password')}
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

export default SignUpForm;

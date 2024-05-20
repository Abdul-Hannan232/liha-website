import ChangePassword from '@components/my-account/change-password';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Change Password',
};

export default async function ChangePasswordPage() {
  return <ChangePassword />;
}

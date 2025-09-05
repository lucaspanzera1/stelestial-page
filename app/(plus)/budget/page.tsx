import BudgetForm from './BudgetForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solicitar Orçamento - Stelestial',
  description: 'Preencha o formulário e receba uma proposta personalizada.',
};

export default function Page() {
  return <BudgetForm />;
}

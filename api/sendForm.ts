// api/sendForm.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const data = new URLSearchParams(req.body as Record<string, string>);

    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbyU6y0c8_JcNFUaEzRZ8FXDDiGXtyt8II4-cjw83a1wERL1jqmmm3a3FRGm8NCzDd8wjA/exec',
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return res.status(200).json({ sucesso: true, resposta: response.data });
  } catch (error) {
    console.error('Erro ao enviar para Google Sheets:', error);
    return res.status(500).json({ error: 'Erro interno ao enviar os dados' });
  }
}

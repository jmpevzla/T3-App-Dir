import { NextResponse } from 'next/server';
 
const result = new Promise<string>((resolve) => {
    resolve('Hello World');
});

export async function GET() {
  const data = await result;
  return NextResponse.json({ data });
}

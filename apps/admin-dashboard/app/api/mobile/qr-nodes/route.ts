import { NextResponse } from 'next/server';
import { QrNodeService } from '@/lib/services/qr-node.service';

const qrNodeService = new QrNodeService();

// Misalnya POST agar Mobile bisa update status node "Online"
export async function POST(req: Request) {
  try {
    const { nodeId } = await req.json();

    if (!nodeId) return NextResponse.json({ error: 'nodeId required' }, { status: 400 });

    const result = await qrNodeService.updateNodeStatusFromMobileScan(nodeId);

    return NextResponse.json({ success: true, ...result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

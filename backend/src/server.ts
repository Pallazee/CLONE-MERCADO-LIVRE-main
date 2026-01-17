import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference, Payment } from "mercadopago";

const app = express();

/* =========================
   CONFIG BÁSICA
========================= */
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   VARIÁVEIS DE AMBIENTE
========================= */
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;

if (!MP_ACCESS_TOKEN) {
  throw new Error("❌ MP_ACCESS_TOKEN NÃO DEFINIDO NO .env");
}

/* =========================
   MERCADO PAGO CLIENT
========================= */
const mpClient = new MercadoPagoConfig({
  accessToken: MP_ACCESS_TOKEN,
});

/* =========================
   ROTA TESTE
========================= */
app.get("/", (_req: Request, res: Response) => {
  res.send("🔥 Backend Mercado Pago ONLINE");
});

/* =========================
   CREATE PREFERENCE
========================= */
app.post("/create_preference", async (_req: Request, res: Response) => {
  try {
    const preference = new Preference(mpClient);

    const response = await preference.create({
      body: {
        items: [
          {
            id: "camiseta-branca-001",
            title: "Camiseta Branca",
            quantity: 1,
            unit_price: 79.9,
            currency_id: "BRL",
          },
        ],

        back_urls: {
          success: "http://localhost:3000/success",
          failure: "http://localhost:3000/failure",
          pending: "http://localhost:3000/pending",
        },
      },
    });

    console.log("✅ PREFERENCE CRIADA:", response.id);

    return res.json({
      id: response.id,
      init_point: response.init_point, // 🔥 USADO NO FRONT
    });
  } catch (error: any) {
    console.error("❌ ERRO AO CRIAR PREFERENCE:", error?.message);

    return res.status(500).json({
      error: error?.message,
    });
  }
});

/* =========================
   WEBHOOK MERCADO PAGO
========================= */
app.post("/webhook", async (req: Request, res: Response) => {
  try {
    console.log("🔔 WEBHOOK RECEBIDO:", req.body);

    const { type, data } = req.body;

    if (type === "payment" && data?.id) {
      const payment = new Payment(mpClient);
      const result = await payment.get({ id: data.id });

      console.log("💰 STATUS:", result.status);
      console.log("💳 MÉTODO:", result.payment_method_id);
    }

    return res.sendStatus(200);
  } catch (error) {
    console.error("❌ ERRO NO WEBHOOK:", error);
    return res.sendStatus(500);
  }
});

/* =========================
   SERVER
========================= */
const PORT = Number(process.env.PORT) || 3333;

app.listen(PORT, () => {
  console.log(`🔥 Backend rodando em http://localhost:${PORT}`);
});

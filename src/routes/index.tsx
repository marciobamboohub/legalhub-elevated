import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  FileText,
  Scale,
  Home,
  Users,
  AlertCircle,
  ScrollText,
  CheckCircle2,
  ChevronDown,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LEGALHUB — Soluções Jurídicas e Regularização de Imóveis" },
      { name: "description", content: "Regularização jurídica completa: inventário, escritura, matrícula, usucapião. Seu imóvel pronto para vender." },
      { property: "og:title", content: "LEGALHUB — Soluções Jurídicas e Regularização" },
      { property: "og:description", content: "+2.000 imóveis regularizados. 25 anos de experiência." },
    ],
  }),
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-baseline gap-1 font-serif ${className}`}>
      <span className="text-xl font-semibold tracking-tight">Legal</span>
      <span className="text-xl font-semibold tracking-tight text-accent">HUB</span>
    </div>
  );
}

const problems = [
  "Imóvel parado por problema documental",
  "Negociação que não avança",
  "Comissão travada",
  "Processo que parece não ter fim",
];

const casesHelped = [
  "Imóvel sem escritura há mais de 20 anos",
  "Inventário impedindo venda do imóvel",
  "Regularização para financiamento bancário",
  "Averbação e atualização de matrícula",
  "Desmembramento de terrenos",
  "Regularização para inventário familiar",
];

const services = [
  {
    icon: Users,
    title: "Inventário não finalizado",
    desc: "Imóveis herdados frequentemente ficam anos sem regularização, dificultando venda, transferência e financiamento.",
  },
  {
    icon: ScrollText,
    title: "Escritura antiga ou inexistente",
    desc: "Muitos imóveis foram negociados informalmente ao longo do tempo e hoje enfrentam problemas para comprovar propriedade.",
  },
  {
    icon: FileText,
    title: "Matrícula desatualizada",
    desc: "Informações divergentes no registro podem impedir financiamentos e gerar insegurança jurídica.",
  },
  {
    icon: Users,
    title: "Pendências entre herdeiros",
    desc: "Conflitos familiares e falta de documentação organizada costumam travar negociações importantes.",
  },
  {
    icon: Home,
    title: "Regularização incompleta",
    desc: "Construções não averbadas, terrenos irregulares e documentação incompleta dificultam a valorização e venda do imóvel.",
  },
  {
    icon: Scale,
    title: "Usucapião e posse sem registro",
    desc: "Imóveis ocupados há muitos anos, mas sem documentação formal, geram insegurança e dificultam venda, financiamento e transferência.",
  },
];

const signals = [
  "O banco recusou financiamento",
  "O imóvel está em inventário há anos",
  "Existe apenas contrato de compra e venda",
  "A matrícula está desatualizada",
  "Há divergência entre documentos",
  "O imóvel não consegue avançar na venda",
];

const process = [
  {
    n: "1",
    title: "Análise da documentação",
    desc: "Identificamos as pendências jurídicas e registrárias do imóvel.",
  },
  {
    n: "2",
    title: "Estratégia de regularização",
    desc: "Definimos o caminho mais rápido e seguro para viabilizar a negociação.",
  },
  {
    n: "3",
    title: "Acompanhamento completo",
    desc: "Nossa equipe conduz todo o processo até a regularização final.",
  },
];

const testimonials = [
  {
    name: "Carlos M.",
    city: "Moema/SP",
    text: "Eu estava há anos tentando resolver a documentação do apartamento da minha mãe. O processo parecia impossível, mas tudo foi conduzido com clareza e segurança. Conseguimos finalizar o inventário sem desgaste familiar.",
  },
  {
    name: "Helena R.",
    city: "Campinas/SP",
    text: "Tínhamos um imóvel sem escritura regularizada há décadas. Recebi toda a orientação necessária e hoje o imóvel finalmente está apto para venda. Atendimento extremamente profissional.",
  },
  {
    name: "Patrícia L.",
    city: "São Paulo/SP",
    text: "Depois de muitos anos adiando a regularização do terreno da família, conseguimos organizar toda a documentação. O suporte foi impecável do início ao fim.",
  },
];

const faqs = [
  {
    q: "Meu imóvel pode ser vendido mesmo com pendências?",
    a: "Em muitos casos, sim. Existem soluções jurídicas e estratégias de regularização que permitem viabilizar a negociação com mais segurança e previsibilidade.",
  },
  {
    q: "Quanto tempo demora uma regularização?",
    a: "O prazo depende do tipo de pendência e da documentação disponível. Alguns processos podem ser resolvidos rapidamente, enquanto outros exigem etapas cartoriais, judiciais ou fiscais mais detalhadas.",
  },
  {
    q: "Inventário impede a venda do imóvel?",
    a: "Não necessariamente. É possível realizar a venda por meio de alvará judicial no decorrer do processo ou formalizar a cessão de direitos hereditários, desde que haja acordo entre os herdeiros.",
  },
  {
    q: "Posso financiar um imóvel irregular?",
    a: "A maioria das instituições financeiras exige a matrícula atualizada e a construção averbada para liberar o crédito. Nosso papel é acelerar essa regularização para viabilizar o financiamento.",
  },
  {
    q: "Quem paga os custos da regularização?",
    a: "Geralmente os custos cartoriais, de impostos e honorários são de responsabilidade do proprietário ou vendedor, mas isso pode ser livremente negociado entre as partes no contrato de compra e venda.",
  },
];

const WHATSAPP_URL = "https://wa.me/5511992619722";

function CtaButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "outline" }) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300";
  if (variant === "outline") {
    return (
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${base} border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground`}>
        {children} <ArrowRight className="h-4 w-4" />
      </a>
    );
  }
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${base} bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm`}>
      {children} <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ nome: "", email: "", celular: "", descricao: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${form.nome}. Meu e-mail é ${form.email}. Gostaria de falar sobre: ${form.descricao}`;
    const url = `https://wa.me/5511992619722?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#servicos" className="transition-colors hover:text-foreground">Serviços</a>
            <a href="#processo" className="transition-colors hover:text-foreground">Processo</a>
            <a href="#depoimentos" className="transition-colors hover:text-foreground">Depoimentos</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-primary px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-block"
          >
            Falar com Especialista
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-32">
          <div className="lg:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-accent">
              Soluções Jurídicas · Regularização
            </p>
            <h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-primary md:text-6xl lg:text-7xl">
              Seu Imóvel pronto
              <br />
              <span className="italic text-secondary">para vender</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Regularização jurídica completa, com foco em viabilizar negociações com segurança e agilidade.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaButton>Falar com Especialista</CtaButton>
            </div>
            <div className="mt-14 grid max-w-lg grid-cols-2 gap-px border border-border bg-border">
              <div className="bg-background p-6">
                <div className="font-serif text-3xl text-primary">+2.000</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Imóveis regularizados</div>
              </div>
              <div className="bg-background p-6">
                <div className="font-serif text-3xl text-primary">25 anos</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">de experiência</div>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-4 bg-accent/10 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-secondary/10">
              <img
                src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=900&q=80"
                alt="Edifício corporativo"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">O Problema</p>
            <h2 className="text-4xl font-medium leading-tight text-primary md:text-5xl">
              O problema não é o imóvel.
              <br />
              <span className="italic text-secondary">É a falta de solução especializada.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="mb-8 text-sm uppercase tracking-wider text-muted-foreground">
              Se você atua no mercado imobiliário, já passou por isso:
            </p>
            <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 bg-background p-5">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>

            <p className="mb-6 mt-12 text-sm uppercase tracking-wider text-muted-foreground">
              Casos que ajudamos a resolver:
            </p>
            <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {casesHelped.map((c) => (
                <li key={c} className="flex items-start gap-3 bg-background p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">Áreas de Atuação</p>
            <h2 className="text-4xl font-medium leading-tight text-primary md:text-5xl">
              Porque muitos imóveis <span className="italic">ficam travados</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Pendências documentais, processos familiares e registros desatualizados podem impedir vendas, financiamentos e negociações por anos.
            </p>
          </div>

          <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group relative bg-background p-8 transition-colors duration-300 hover:bg-muted/40"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-border text-primary transition-colors group-hover:border-accent group-hover:text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <div className="mt-6 h-px w-12 bg-accent transition-all duration-300 group-hover:w-24" />
              </article>
            ))}
          </div>

          <div className="mt-16 border-l-2 border-accent pl-6">
            <p className="max-w-3xl text-lg italic leading-relaxed text-secondary">
              Em muitos casos, o imóvel tem valor e potencial de venda, mas a documentação impede que a negociação aconteça com segurança.
            </p>
            <div className="mt-8">
              <CtaButton>Falar com Especialista</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Signals */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">Diagnóstico</p>
            <h2 className="text-4xl font-medium leading-tight md:text-5xl">
              Sinais de que seu imóvel pode <span className="italic text-accent">precisar de regularização</span>
            </h2>
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {signals.map((s) => (
              <li key={s} className="flex items-start gap-4 border-b border-primary-foreground/10 pb-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-lg">{s}</span>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-accent bg-accent px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-accent-foreground transition-colors hover:bg-transparent hover:text-accent"
              >
                Falar com Especialista <ArrowRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">Metodologia</p>
            <h2 className="text-4xl font-medium leading-tight text-primary md:text-5xl">
              Um processo claro para regularização completa do seu imóvel
            </h2>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {process.map((step) => (
              <div key={step.n} className="relative">
                <div className="mb-6 font-serif text-6xl text-accent">{step.n}.</div>
                <h3 className="text-xl text-primary">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-8 border border-border bg-muted/30 p-10 md:grid-cols-3 md:p-14">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Experiência</p>
              <p className="mt-3 font-serif text-3xl text-primary">+2.000 imóveis documentados</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Trajetória</p>
              <p className="mt-3 font-serif text-3xl text-primary">25 anos de atuação no mercado</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Abordagem</p>
              <p className="mt-3 font-serif text-3xl text-primary">Conhecimento jurídico + visão comercial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">Depoimentos</p>
            <h2 className="text-4xl font-medium leading-tight text-primary md:text-5xl">
              Conheça alguns casos que <span className="italic">ajudamos a resolver</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Inventário, escritura, matrícula e regularização documental conduzidos com clareza e segurança.
            </p>
          </div>

          <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col bg-background p-8">
                <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                  <span className="mr-1 font-serif text-3xl leading-none text-accent">“</span>
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-serif text-lg text-primary">{t.name}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.city}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">FAQ</p>
            <h2 className="text-4xl font-medium leading-tight text-primary md:text-5xl">
              Perguntas que <span className="italic">mais recebemos</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Cada imóvel possui uma situação única. Nossa equipe analisa cada caso para encontrar a solução jurídica mais segura e viável.
            </p>
            <div className="mt-8">
              <CtaButton variant="outline">Falar com Especialista</CtaButton>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-border border-y border-border">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-accent"
                    >
                      <span className="font-serif text-lg text-primary">{f.q}</span>
                      <ChevronDown
                        className={`mt-1 h-5 w-5 flex-shrink-0 text-accent transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">Contato</p>
            <h2 className="text-4xl font-medium leading-tight md:text-5xl">
              Fale agora com um especialista e entenda como o seu imóvel pode ser <span className="italic text-accent">regularizado.</span>
            </h2>
            <p className="mt-8 border-l-2 border-accent pl-6 text-lg italic text-primary-foreground/80">
              Imóveis não deixam de ser vendidos por acaso. Eles travam por falta de solução.
            </p>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-accent/40 bg-primary-foreground/5 p-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
                <h3 className="mt-4 font-serif text-2xl">Mensagem enviada</h3>
                <p className="mt-2 text-primary-foreground/70">
                  Em breve um de nossos especialistas entrará em contato.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Nome" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} required />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                </div>
                <Field label="Celular" type="tel" value={form.celular} onChange={(v) => setForm({ ...form, celular: v })} required />
                <div>
                  <label className="block text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
                    Descrição
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.descricao}
                    onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                    className="mt-3 w-full resize-none border-b border-primary-foreground/20 bg-transparent py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 border border-accent bg-accent px-8 py-4 text-sm font-medium uppercase tracking-wide text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
                >
                  Falar com Especialista
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 lg:flex-row lg:items-center lg:px-10">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Soluções Jurídicas e Regularização — viabilizando negociações imobiliárias com segurança.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-8">
            <a href="#" className="transition-colors hover:text-foreground">Terms & Support</a>
            <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} LEGALHUB. Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-b border-primary-foreground/20 bg-transparent py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
      />
    </div>
  );
}

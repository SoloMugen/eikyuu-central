-- Enable pgvector if needed for future embeddings
create extension if not exists vector;

-- Articles Table
create table if not exists public.articles (
  id uuid default gen_random_uuid() primary key,
  url text not null unique,
  title text not null,
  content text,
  summary text,
  category text not null,
  sub_category text,
  image_url text,
  image_prompt text,
  source text,
  published_at timestamptz,
  legitimacy_score jsonb,
  created_at timestamptz default now()
);

-- Ingestion Logs
create table if not exists public.ingestion_logs (
  id uuid default gen_random_uuid() primary key,
  category text,
  status text, -- 'success', 'failed', 'partial'
  articles_count int default 0,
  error_message text,
  started_at timestamptz default now(),
  completed_at timestamptz
);

-- RLS Policies (Open read, Service Role write)
alter table public.articles enable row level security;
alter table public.ingestion_logs enable row level security;

create policy "Allow public read on articles"
on public.articles for select
to anon
using (true);

create policy "Allow service role full access"
on public.articles for all
to service_role
using (true);

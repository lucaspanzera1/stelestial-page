"use client";

import React from "react";

type ServiceState = {
  database?: string;
  redis?: string;
  [key: string]: any;
};

export type HealthPayload = {
  success: boolean;
  status: string;
  message?: string;
  timestamp?: string;
  environment?: string;
  version?: string;
  uptime?: number;
  services?: ServiceState;
};

// Format uptime in seconds to "Xd Yh Zm Ws"
function formatUptime(seconds: number) {
  if (!isFinite(seconds) || seconds <= 0) return '0s';
  const d = Math.floor(seconds / 86400);
  seconds -= d * 86400;
  const h = Math.floor(seconds / 3600);
  seconds -= h * 3600;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds - m * 60);
  const parts: string[] = [];
  if (d) parts.push(`${d}d`);
  if (h) parts.push(`${h}h`);
  if (m) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(' ');
}

function Badge({ status }: { status: string }) {
  const isHealthy = status?.toLowerCase?.() === "healthy" || status === "ok" || status === "up";
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${isHealthy ? 'bg-green-600/20 text-green-300' : 'bg-red-600/10 text-red-300'} border ${isHealthy ? 'border-green-700/40' : 'border-red-700/30'}`}
    >
      <span className={`mr-2 h-2 w-2 rounded-full ${isHealthy ? 'bg-green-400' : 'bg-red-400'}`} />
      {status}
    </span>
  );
}

// Presentational component: recebe os dados e renderiza a UI
export function HealthStatusUI({ data }: { data: HealthPayload | null }) {
  if (!data) return null;

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-6 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Health Status
            </h1>
            <p className="mt-3 text-lg text-indigo-200/65">Resumo do estado atual da API</p>
          </div>

          <div className="mx-auto max-w-[900px] space-y-6">
            <div className="rounded-xl bg-gray-900/60 border border-gray-800 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">{data?.message ?? 'API'}</h2>
                  <p className="mt-1 text-sm text-indigo-200/60">{data?.environment ? `${data.environment} — v${data.version ?? 'n/a'}` : `v${data.version ?? 'n/a'}`}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge status={data.status ?? (data.success ? 'healthy' : 'unhealthy')} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-indigo-200/60">Uptime</p>
                  <p className="mt-1 text-sm text-white">{typeof data.uptime === 'number' ? formatUptime(data.uptime) : 'n/a'}</p>
                </div>
                <div>
                  <p className="text-xs text-indigo-200/60">Último check</p>
                  <p className="mt-1 text-sm text-white">{data.timestamp ? new Date(data.timestamp).toLocaleString() : 'n/a'}</p>
                </div>
                <div>
                  <p className="text-xs text-indigo-200/60">Success</p>
                  <p className="mt-1 text-sm text-white">{String(!!data.success)}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-900/60 border border-gray-800 p-6">
              <h3 className="text-sm font-medium text-white">Serviços</h3>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {data.services && Object.keys(data.services).length > 0 ? (
                  Object.entries(data.services).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between rounded-md bg-gray-800/40 px-4 py-3">
                      <div>
                        <p className="text-sm text-indigo-200/65 capitalize">{key}</p>
                        <p className="text-xs text-indigo-200/45">{String(val)}</p>
                      </div>
                      <div>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${String(val).toLowerCase().includes('connect') || String(val).toLowerCase().includes('connected') || String(val).toLowerCase().includes('up') ? 'bg-green-600/20 text-green-300' : 'bg-red-600/10 text-red-300'}`}>
                          {String(val)}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-indigo-200/65">Nenhum serviço reportado.</p>
                )}
              </div>
            </div>

            <div className="rounded-xl bg-gray-900/60 border border-gray-800 p-6">
              <h3 className="text-sm font-medium text-white">Raw</h3>
              <pre className="mt-3 max-h-64 overflow-auto rounded bg-black/30 p-3 text-xs text-indigo-200/60">{JSON.stringify(data, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Page wrapper: busca os dados e gerencia loading / erro / polling / refresh
export default function HealthPage() {
  // systems list - could come from config or API
  const systems = [
    { key: 'novoden0v0', name: 'novoden0v0.com.br' },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-white">Status dos Sistemas</h1>
          <p className="text-sm text-indigo-200/60">Monitoramento simples dos nosso serviços</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {systems.map((s) => (
          <SystemCard key={s.key} system={s} />
        ))}
      </div>
    </div>
  );
}

function SystemCard({ system }: { system: { key: string; name: string } }) {
  const [data, setData] = React.useState<HealthPayload | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchOne = React.useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/proxy/health?key=${system.key}`, { signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json as HealthPayload);
    } catch (err: any) {
      if (err?.name === 'AbortError') return;
      setError(err?.message ?? 'Erro ao buscar');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [system.key]);

  React.useEffect(() => {
    const controller = new AbortController();
    fetchOne(controller.signal);
    const id = window.setInterval(() => fetchOne(), 30_000);
    return () => {
      controller.abort();
      window.clearInterval(id);
    };
  }, [fetchOne]);

  return (
    <div className="rounded-xl bg-gray-900/60 border border-gray-800 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{system.name}</h3>
          <p className="text-sm text-indigo-200/60">{data?.environment ? `${data.environment} — v${data.version ?? 'n/a'}` : `v${data?.version ?? 'n/a'}`}</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => fetchOne()} className="rounded bg-indigo-600/40 px-2 py-1 text-sm text-white">Atualizar</button>
          {loading && <span className="text-sm text-indigo-200/60">Carregando...</span>}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div>
          <p className="text-xs text-indigo-200/60">API</p>
          <p className="mt-1 text-sm text-white"><Badge status={data?.status ?? (data?.success ? 'healthy' : 'unhealthy')} /></p>
        </div>
        <div>
          <p className="text-xs text-indigo-200/60">Uptime</p>
          <p className="mt-1 text-sm text-white">{typeof data?.uptime === 'number' ? formatUptime(data!.uptime) : 'n/a'}</p>
        </div>
        <div>
          <p className="text-xs text-indigo-200/60">Último check</p>
          <p className="mt-1 text-sm text-white">{data?.timestamp ? new Date(data.timestamp).toLocaleString() : 'n/a'}</p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm text-indigo-200/65">Serviços</h4>
        <div className="mt-2 grid grid-cols-1 gap-2">
          {data?.services ? (
            Object.entries(data.services).map(([k, v]) => (
              <div key={k} className="flex items-center justify-between rounded bg-gray-800/40 px-3 py-2">
                <div>
                  <p className="text-sm text-indigo-200/65 capitalize">{k}</p>
                </div>
                <div>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${String(v).toLowerCase().includes('connect') || String(v).toLowerCase().includes('connected') || String(v).toLowerCase().includes('up') ? 'bg-green-600/20 text-green-300' : 'bg-red-600/10 text-red-300'}`}>
                    {String(v)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-indigo-200/65">Nenhum serviço reportado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

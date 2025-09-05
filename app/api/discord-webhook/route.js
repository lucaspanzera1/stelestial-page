export async function POST(request) {
  try {
    const data = await request.json();
    
    // URL do seu webhook do Discord (configure no .env.local)
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      return Response.json({ error: 'Webhook URL não configurada' }, { status: 500 });
    }

    // Mapeia os tipos de projeto para nomes mais legíveis
    const projectTypes = {
      website: 'Website Institucional',
      ecommerce: 'E-commerce',
      webapp: 'Aplicação Web',
      mobile: 'Aplicativo Mobile',
      system: 'Sistema Corporativo',
      api: 'API/Integração',
      other: 'Outro'
    };

    // Mapeia faixas de orçamento
    const budgetRanges = {
      '5k-10k': 'R$ 5.000 - R$ 10.000',
      '10k-25k': 'R$ 10.000 - R$ 25.000',
      '25k-50k': 'R$ 25.000 - R$ 50.000',
      '50k-100k': 'R$ 50.000 - R$ 100.000',
      '100k+': 'R$ 100.000+',
      'not-sure': 'Não tenho certeza'
    };

    // Mapeia prazos
    const timelines = {
      urgent: 'Urgente (até 1 mês)',
      fast: 'Rápido (1-2 meses)',
      normal: 'Normal (2-4 meses)',
      flexible: 'Flexível (4+ meses)'
    };

    // Cria o embed do Discord
    const embed = {
      title: "🚀 Nova Solicitação de Orçamento!",
      color: 0x6366F1,
      timestamp: new Date().toISOString(),
      thumbnail: {
        url: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png" // Ícone de orçamento
      },
      fields: [
        {
          name: "👤 Cliente",
          value: `**Nome:** ${data.name}\n**Email:** ${data.email}\n**Telefone:** ${data.phone || 'Não informado'}\n**Empresa:** ${data.company}`,
          inline: false
        },
        {
          name: "📋 Projeto",
          value: `**Tipo:** ${projectTypes[data.projectType] || 'Não especificado'}\n**Orçamento:** ${budgetRanges[data.budgetRange] || 'Não especificado'}\n**Prazo:** ${timelines[data.timeline] || 'Não especificado'}`,
          inline: false
        },
        {
          name: "📝 Descrição",
          value: data.description.length > 1000 ? 
                `${data.description.substring(0, 1000)}...` : 
                data.description,
          inline: false
        }
      ],
      footer: {
        text: "Sistema de Orçamentos - Stelestial",
        icon_url: "https://cdn-icons-png.flaticon.com/512/906/906334.png"
      }
    };

    // Adiciona funcionalidades se houver
    if (data.features && data.features.length > 0) {
      embed.fields.push({
        name: "⚡ Funcionalidades Desejadas",
        value: data.features.join('\n• '),
        inline: false
      });
    }

    // Payload para o Discord
    const payload = {
      content: "@here Nova solicitação de orçamento recebida!", // Menciona @here para notificar
      embeds: [embed]
    };

    // Envia para o Discord
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!discordResponse.ok) {
      throw new Error(`Discord webhook failed: ${discordResponse.status}`);
    }

    // Salva no banco de dados (opcional)
    // await saveToDatabase(data);

    return Response.json({ success: true, message: 'Orçamento enviado com sucesso!' });

  } catch (error) {
    console.error('Erro no webhook do Discord:', error);
    return Response.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
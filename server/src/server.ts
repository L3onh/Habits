// Back-ennd API RESTful
// 

// essas são rotas que disponibilizam recursos para o frontend consumir
// localhost:3333/habits

import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify()
const prisma = new PrismaClient()

/**
 * Métodos HTTPS:
 * GET: para buscar algo;
 * POST: para criar algo;
 * PUT: para atualizar algo por completo;
 * PATCH: para atualizar algo especifico;
 * DELETE: para deletar algo;
 */

app.register(cors) // permite que o backend fique visível para o frontend

app.get('/', async ()=>{
    const habits =  await prisma.habit.findMany({ //await permite que o backennd só retorne o recurso quando ele for carregado de fato
    })
    return habits
})

app.listen({ //mostra em qual porta o backend está rodando
    port:3333
}).then(()=>{
    console.log('HTTP Server running')
})
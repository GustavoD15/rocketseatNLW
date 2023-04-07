import { PrismaClient } from '@prisma/client'
import Fastify from 'fastify'

const app = Fastify()
const prisma = new PrismaClient();


/**
 * Método HTTP: Get, Post, Put, Patch, Delete
 */
app.get('/hello', () => {
    const habits = prisma.habit.findMany({})
    return 'Hello NLW'
})

app.listen({
    port: 3333,
}) .then(() => {
    console.log('HTTP Server running!')
})
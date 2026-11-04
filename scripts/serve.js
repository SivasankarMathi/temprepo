import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const port = Number(process.env.PORT) || 8080;
const host = '0.0.0.0';

const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.json': 'application/json'
};

const server = http.createServer((request, response) => {
    const requestPath = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
    const relativePath = requestPath === '/' ? 'login.html' : requestPath.replace(/^\/+/, '');
    const filePath = path.join(rootDir, relativePath);

    // Refuse to serve anything outside the source folder.
    if (!filePath.startsWith(rootDir + path.sep) && filePath !== rootDir) {
        response.writeHead(403).end('Forbidden');
        return;
    }

    fs.readFile(filePath, (error, data) => {
        if (error) {
            response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
            return;
        }

        response.writeHead(200, {
            'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream',
            'Cache-Control': 'no-cache'
        });
        response.end(data);
    });
});

server.listen(port, host, () => {
    console.log(`Serving ${rootDir} on http://${host}:${port}`);
});

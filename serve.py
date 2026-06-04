import os, http.server, socketserver
os.chdir(os.path.dirname(os.path.abspath(__file__)))
handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map.update({'.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript'})
with socketserver.TCPServer(('', 3000), handler) as httpd:
    httpd.serve_forever()

# node-ref-object-leak

## Reproduce

- Install `Rust`
- Run `yarn install`
- Run `yarn build`
- Run `node ./test.js`

```bash
╔══════════╤═══════════╤══════════╤══════════╤══════════════╗
║ rss      │ heapTotal │ heapUsed │ external │ arrayBuffers ║
╟──────────┼───────────┼──────────┼──────────┼──────────────╢
║ +80.1 MB │ +80 MB    │ +80 MB   │ +40 B    │  0 B         ║
╚══════════╧═══════════╧══════════╧══════════╧══════════════╝

╔═════════╤═══════════╤══════════╤══════════╤══════════════╗
║ rss     │ heapTotal │ heapUsed │ external │ arrayBuffers ║
╟─────────┼───────────┼──────────┼──────────┼──────────────╢
║ +250 MB │ +85.3 MB  │ +79 MB   │ -170 kB  │ -162 kB      ║
╚═════════╧═══════════╧══════════╧══════════╧══════════════╝

╔═════════╤═══════════╤══════════╤══════════╤══════════════╗
║ rss     │ heapTotal │ heapUsed │ external │ arrayBuffers ║
╟─────────┼───────────┼──────────┼──────────┼──────────────╢
║ +414 MB │ +85.3 MB  │ +79.7 MB │ -170 kB  │ -162 kB      ║
╚═════════╧═══════════╧══════════╧══════════╧══════════════╝

╔═════════╤═══════════╤══════════╤══════════╤══════════════╗
║ rss     │ heapTotal │ heapUsed │ external │ arrayBuffers ║
╟─────────┼───────────┼──────────┼──────────┼──────────────╢
║ +576 MB │ +85.3 MB  │ +79.3 MB │ -170 kB  │ -162 kB      ║
╚═════════╧═══════════╧══════════╧══════════╧══════════════╝

╔═════════╤═══════════╤══════════╤══════════╤══════════════╗
║ rss     │ heapTotal │ heapUsed │ external │ arrayBuffers ║
╟─────────┼───────────┼──────────┼──────────┼──────────────╢
║ +739 MB │ +85.3 MB  │ +79.1 MB │ -170 kB  │ -162 kB      ║
╚═════════╧═══════════╧══════════╧══════════╧══════════════╝

╔═════════╤═══════════╤══════════╤══════════╤══════════════╗
║ rss     │ heapTotal │ heapUsed │ external │ arrayBuffers ║
╟─────────┼───────────┼──────────┼──────────┼──────────────╢
║ +902 MB │ +85.3 MB  │ +79 MB   │ -170 kB  │ -162 kB      ║
╚═════════╧═══════════╧══════════╧══════════╧══════════════╝

╔══════════╤═══════════╤══════════╤══════════╤══════════════╗
║ rss      │ heapTotal │ heapUsed │ external │ arrayBuffers ║
╟──────────┼───────────┼──────────┼──────────┼──────────────╢
║ +1.06 GB │ +85.3 MB  │ +79 MB   │ -170 kB  │ -162 kB      ║
╚══════════╧═══════════╧══════════╧══════════╧══════════════╝

╔══════════╤═══════════╤══════════╤══════════╤══════════════╗
║ rss      │ heapTotal │ heapUsed │ external │ arrayBuffers ║
╟──────────┼───────────┼──────────┼──────────┼──────────────╢
║ +1.23 GB │ +85.3 MB  │ +79.1 MB │ -170 kB  │ -162 kB      ║
╚══════════╧═══════════╧══════════╧══════════╧══════════════╝

╔══════════╤═══════════╤══════════╤══════════╤══════════════╗
║ rss      │ heapTotal │ heapUsed │ external │ arrayBuffers ║
╟──────────┼───────────┼──────────┼──────────┼──────────────╢
║ +1.39 GB │ +85.3 MB  │ +79 MB   │ -170 kB  │ -162 kB      ║
╚══════════╧═══════════╧══════════╧══════════╧══════════════╝

╔══════════╤═══════════╤══════════╤══════════╤══════════════╗
║ rss      │ heapTotal │ heapUsed │ external │ arrayBuffers ║
╟──────────┼───────────┼──────────┼──────────┼──────────────╢
║ +1.55 GB │ +85.3 MB  │ +79 MB   │ -170 kB  │ -162 kB      ║
╚══════════╧═══════════╧══════════╧══════════╧══════════════╝
```
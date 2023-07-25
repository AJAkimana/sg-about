# GitStart

### Setup system requirements

- "node": "^v18.9.0"
  Run `nvm install 18.9.0` to install

- "pnpm": "^7.26.1"
  Run `pnpm i -g pnpm@7.26.1` to install pnpm required version

### Running the website locally

Run:

```sh
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your web browser.

### Docker image

```sh
# Build
docker build -t sourcegraph/about .

# Start
docker run -d --name sourcegraph/about -p 3001:3000 sourcegraph-about
```
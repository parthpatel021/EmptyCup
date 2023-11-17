# EmptyCup
It lists all the designers who are active on EmptyCup’s platform. Any homeowners interested in finding a designer who they can collaborate with can come to this listings page where they can see all our users who are available for business.

## Setting up Locally
1. Clone this repository to your local environment

```bash
git clone https://github.com/parthpatel021/EmptyCup.git
```

2. Install dependencies for the server

```bash
npm install
```

3. Install dependencies for the client

```bash
cd ./client/
npm install
```

4. add a `.env` file<br />
  - in `client` directory
```bash
REACT_APP_BASE_URL=http://localhost:8080/
```
  - in the `root` directory
```bash
MONGO_URL=YOUR_MONGODB_URL
```
5. To run it locally execute the following command in the `client` directory

```bash
npm run dev
```

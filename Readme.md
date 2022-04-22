## **Cloud Authenticator**

---

#### **Setup**:

```bash
$ gcloud auth login
$ gcloud config set project $PROJECT_ID
```

#### **Do not use yarn to install dependencies!**

To start the project run:

```bash
$ npm run watch
```

#### **Deployment**:

To deploy a single function to `gcloud` run:

```bash
$ gcloud functions deploy $FUNCTION_NAME \
--runtime nodejs16 \
--trigger-http
--region us-central1
```

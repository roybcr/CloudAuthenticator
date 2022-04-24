#! /bin/zsh

gcloud kms decrypt \
--location global \
--keyring $1 \
--key $2 \
--ciphertext-file cloud-auth-staging.json.enc \
--plaintext-file cloud-auth-staging.json
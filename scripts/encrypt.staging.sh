#! /bin/zsh

gcloud kms encrypt \
--location global \
--keyring $1 \
--key $2 \
--plaintext-file cloud-auth-staging.json \
--ciphertext-file cloud-auth-staging.json.enc
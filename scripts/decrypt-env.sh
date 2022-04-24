#! /bin/zsh

gcloud kms decrypt \
--location global \
--keyring $1 \
--key $2 \
--ciphertext-file .env.enc \
--plaintext-file .env
# docker と package.json の更新

1. ローカルで `npm install --save` を実施する
1. package.json と package-lock.json が更新されていることを確認
1. Dockerfile で COPY インストラクションを使って package.json と package-lock.json をコンテナにコピー
1. Dockerfile で RUN インストラクションを使って npm install を実行
1. docker-compose build でイメージを更新
1. docker-compose up --force-recreate でコンテナを再生成し、開始

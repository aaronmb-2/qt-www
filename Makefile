.PHONY : lint lintfix tf_fmt tf_init tf_validate tf_plan tf_apply

lint:
	npm run lint

lintfix:
	npm run lintfix

tf_fmt:
	terraform fmt -recursive ./.tf

tf_init:
	terraform -chdir=".tf/composition/www/eu-central-1/$(env)/" init

tf_validate:
	terraform -chdir=./.tf/composition/www/eu-central-1/$(env)/ validate

tf_plan:
	terraform -chdir=./.tf/composition/www/eu-central-1/$(env)/ plan

tf_apply:
	terraform -chdir=./.tf/composition/www/eu-central-1/$(env)/ apply --auto-approve
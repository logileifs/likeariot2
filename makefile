.PHONY: deploy

run:
	@ python manage.py runserver 0.0.0.0:8000

deploy:
	@ fab deploy
# Generated by Django 4.1 on 2024-02-02 05:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=128)),
                ('email', models.CharField(default='', max_length=128)),
                ('password', models.CharField(default='', max_length=128)),
            ],
        ),
    ]

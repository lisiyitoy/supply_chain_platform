# Generated by Django 4.1 on 2024-02-02 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_user_user_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='id',
        ),
        migrations.AlterField(
            model_name='user',
            name='user_id',
            field=models.CharField(default='4fdf6f81-a290-48a2-87fc-c6471abda4e4', max_length=128, primary_key=True, serialize=False),
        ),
    ]

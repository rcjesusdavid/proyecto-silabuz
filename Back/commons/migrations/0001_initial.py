# Generated by Django 4.0.2 on 2022-03-05 14:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='Nombre')),
                ('alpha2code', models.CharField(max_length=2, unique=True, verbose_name='Codigo de 2 letras')),
                ('alpha3code', models.CharField(max_length=3, unique=True, verbose_name='Codigo de 3 letras')),
                ('numeric_code', models.IntegerField(unique=True, verbose_name='Codigo numerico')),
                ('phone_prefix', models.IntegerField(default=0, unique=True, verbose_name='Prefijo telefonico')),
            ],
            options={
                'verbose_name': 'Pais',
                'verbose_name_plural': 'Paises',
            },
        ),
        migrations.CreateModel(
            name='DocumentType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('long_name', models.CharField(max_length=255)),
                ('short_name', models.CharField(max_length=55)),
                ('character_length', models.SmallIntegerField()),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Gender',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('short_name', models.CharField(max_length=5)),
                ('long_name', models.CharField(max_length=100)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='Nombre')),
                ('ubigeo_code', models.IntegerField(blank=True, null=True, verbose_name='Codigo de ubigeo')),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='commons.country', verbose_name='Pais')),
            ],
            options={
                'verbose_name': 'Departamento',
                'verbose_name_plural': 'Departamentos',
            },
        ),
        migrations.CreateModel(
            name='SubRegion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='Nombre')),
                ('ubigeo_code', models.IntegerField(blank=True, null=True, verbose_name='Codigo de ubigeo')),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='commons.region', verbose_name='Regiones')),
            ],
            options={
                'verbose_name': 'Provincia',
                'verbose_name_plural': 'Provincias',
            },
        ),
        migrations.CreateModel(
            name='District',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='Nombre')),
                ('ubigeo_code', models.IntegerField(blank=True, null=True, verbose_name='Codigo de ubigeo')),
                ('subregion', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='commons.subregion', verbose_name='Provincia')),
            ],
            options={
                'verbose_name': 'Distrito',
                'verbose_name_plural': 'Distritos',
            },
        ),
        migrations.CreateModel(
            name='CountryCodePhone',
            fields=[
            ],
            options={
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('commons.country',),
        ),
    ]
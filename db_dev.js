require('dotenv').config()
const envImport = require('@grimtech/envimport')
const execa = require('execa')

const subprocess = execa(
    'docker', 
    [
        'run',
        '-e', `POSTGRES_USER=${envImport('DATABASE_NAME')}`,
        '-e', `POSTGRES_PASSWORD=${envImport('DATABASE_PASSWORD')}`,
        '-p', `${envImport('DATABASE_PORT')}:${envImport('DATABASE_PORT')}`,
        '--rm',
        'postgres'
    ]
);

subprocess.stdout.pipe(process.stdout);
subprocess.stderr.pipe(process.stderr);

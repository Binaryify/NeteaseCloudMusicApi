import os
import subprocess

# Bump version
print('Bumping version...')
subprocess.check_call(['bumpversion', 'patch'])

# Push changes to remote
print('Pushing changes to remote...')
subprocess.check_call(['git', 'push'])
subprocess.check_call(['git', 'push', '--tags'])

# Run towncrier
print('Running towncrier...')
subprocess.check_call(['towncrier', '--yes'])

print("Created newsfragments directory")
if not os.path.isdir('./newsfragments'):
    os.mkdir('./newsfragments')

print("Done!")
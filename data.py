
from JumpScale import j

path="test/data.js"

data=j.data.serializer.json.load(path)

from IPython import embed
print ("DEBUG NOW 99")
embed()
raise RuntimeError("stop debug here")

$ps = docker ps -q -a
if ($null -ne $ps) {
  docker stop $ps
  docker rm $ps
  docker volume rm $(docker volume ls -qf dangling=true)
}
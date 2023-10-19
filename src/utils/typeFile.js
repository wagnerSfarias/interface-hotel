import { toast } from 'react-toastify'

const typeFile = file => {
  const myFile = file.target.files[0]?.name
  const extension = myFile.split('.').pop()
  const validTypes = ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG']
  const noExt = validTypes.includes(extension)

  if (!noExt) {
    toast.warn('Por favor, inserir arquivos de extensões png, jpg, jpeg.')
    return false
  }

  return file.target.files
}

export default typeFile

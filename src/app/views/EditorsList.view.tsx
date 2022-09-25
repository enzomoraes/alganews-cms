import usePageTitle from '../../core/hooks/usePageTitle'
import EditorsList from '../features/EditorsList'
import DefaultLayout from '../layouts/Default'

export default function EditorsListView () {
  usePageTitle('Lista de editores')
  
  return <DefaultLayout>
    <EditorsList />
  </DefaultLayout>
}
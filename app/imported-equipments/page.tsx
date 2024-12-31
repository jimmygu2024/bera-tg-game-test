'use client'
import ImportedEquipments from '@/sections/importedEquipments'
import { Suspense } from 'react';

const ImportedEquipmentsPage = () => {
  return <Suspense fallback={<></>}>
    <ImportedEquipments />
  </Suspense>
}

export default ImportedEquipmentsPage;
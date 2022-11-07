import { defineComponent,onMounted,ref } from 'vue';
import { useRoute,useRouter } from 'vue-router'
import {result,formatTimestamp } from '@/helpers/utils';
import { book, inventoryLog } from '@/service';
import { CheckOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue'
import Update from '@/views/Books/Update/index.vue'

const columns = [
  {
    title: '数量',
    dataIndex: 'num',
  },
  {
    title: '操作时间',
    slots: {
      customRender: 'createdAt',
    }
  }
]

export default defineComponent({
  components: {
    Update,
    CheckOutlined,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const { id } = route.params;

    const detailInfo = ref({});
    const log = ref([])
    const showUpdateModal = ref(false);
    const logTotal = ref(0);
    const logCurPage = ref(1)
    const curLogType = ref('IN_COUNT');

    const getDetail =async () => {
      const res = await book.detail(id);

      result(res)
        .success(({data}) => {
          detailInfo.value = data;
      })
    }

    // 获取出入库日志
    const getInventoryLog =async(type)=> {
      const res = await inventoryLog.list(curLogType.value,
        logCurPage.value,
        10);

      result(res)
        .success(({data:{list,total}}) => {
          log.value = list;
          logTotal.value = total
      })
    }
    
    onMounted(() => {
      getDetail();
      getInventoryLog();
    });

    const remove = async () => {
      const res = await book.remove(id);

      result(res)
        .success(({msg}) => {
          message.success(msg);

          router.replace('/books')
        });
    }
    
    const update = (book) => {
      Object.assign(detailInfo.value, book);
    };

    
    const setLogPage = (page) => {
      logCurPage.value = page;
      getInventoryLog();
    };

    const logFilter = (type) => {
      curLogType.value = type;

      getInventoryLog();
    }

    return {
      d: detailInfo, 
      formatTimestamp,
      remove,
      showUpdateModal,
      update,
      log,
      logTotal,
      setLogPage,
      columns,
      logFilter,
      curLogType,
      logCurPage,
    };
  }
});
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FunctionAss2_KrutiNayee
{
    class Ass2
    {
        public void PrintNumbers(int n)
        {
            for (int i = 1; i <= n; i++)
            {
                Console.WriteLine(i);
            }
        }

        // function to find min and max using ref variables
        public void FindMinMax(int[] arr, ref int min, ref int max)
        {
            min = arr[0];
            max = arr[0];
            for (int i = 1; i < arr.Length; i++)
            {
                if (arr[i] < min) min = arr[i];
                if (arr[i] > max) max = arr[i];
            }
        }
        static void Main(string[] args)
        {
            Ass2 a = new Ass2();
            a.PrintNumbers(5);

            int[] numbers = { 1, 2, 3, 4, 5 };
            int min = 0, max = 0;
            a.FindMinMax(numbers, ref min, ref max);
            Console.WriteLine("Minimum value: " + min);
            Console.WriteLine("Maximum value: " + max);
            Console.ReadKey();
        }
    }
}

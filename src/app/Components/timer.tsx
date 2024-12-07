export default function Timer(){
    return(
        <div className="flex items-start justify-center w-auto gap-3 mt-4 sm:mt-0 ">
<div className="timer w-16">

<p  className="text-[14px] font-medium text-text2 mt-1 text-center w-full sm:text-[16px]">Days</p>
<h3 className="font-bold text-[28px] text-text2 text-center">03</h3>

</div>
<h3 className="font-bold text-2xl text-secondary2"> :</h3>

<div className="timer w-16">


<p  className="text-[14px] font-medium text-text2 mt-1 text-center w-full sm:text-[16px]">Hours</p>
<h3 className="font-bold text-[28px] text-text2 text-center">23</h3>

</div>
<h3 className="font-bold text-2xl text-secondary2"> :</h3>

<div className="timer w-16">

<p  className="text-[14px] font-medium text-text2 mt-1 text-center w-full sm:text-[16px]">Minutes</p>
<h3 className="font-bold text-[28px] text-text2 text-center">19</h3>

</div>
<h3 className="font-bold text-2xl text-secondary2"> :</h3>

<div className="timer w-16">

<p  className="text-[14px] font-medium text-text2 mt-1 text-center w-full sm:text-[16px]">Seconds</p>
<h3 className="font-bold text-[28px] text-text2 text-center">56</h3>

</div>
</div>
                    
    )
}